import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, address, zip, city, notes, email, items, subtotal, deliveryFee, total, date } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachments and HTML with cid references
    const attachments = items.map((item, index) => ({
      filename: `${item.name}.jpg`,
      path: item.image, // direct URL
      cid: `item${index}`, // unique cid
    }));

    const orderItemsHTML = items
      .map(
        (item, index) => `
      <div style="margin-bottom: 15px;">
        <strong>${item.name}</strong> (Size: ${item.size || "-"}) — Qty: ${item.quantity} — Price: DH ${(item.price * item.quantity).toFixed(2)}<br/>
        <img src="cid:item${index}" alt="${item.name}" width="120" style="display:block; margin-top:5px; border-radius:8px;" />
      </div>
    `
      )
      .join("");

    // Email to admin
    await transporter.sendMail({
      from: `"New Order" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🛒 New Order - ${fullName}`,
      html: `
        <h2>New Order Received</h2>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${city} ${zip}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>

        <h3>Order Details</h3>
        ${orderItemsHTML}

        <p><strong>Subtotal:</strong> DH ${subtotal.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> DH ${deliveryFee}</p>
        <p><strong>Total:</strong> DH ${total.toFixed(2)}</p>

        <p><strong>Order Date:</strong> ${date}</p>
      `,
      attachments,
    });

    // Email to customer
    if (email) {
      await transporter.sendMail({
        from: `"Your Order" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `🧾 Your Order Receipt - Thank You ${fullName}!`,
        html: `
          <h2>Thank you for your order!</h2>
          <p>Hi <strong>${fullName}</strong>,</p>
          <p>Your order will be delivered to:</p>
          <p>${address}, ${city} ${zip}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h3>Your Items</h3>
          ${orderItemsHTML}

          <p><strong>Total:</strong> DH ${total.toFixed(2)}</p>
          <p>We are excited to deliver your items soon!</p>
          <br>
          <p>Thank you for shopping with us!</p>
        `,
        attachments,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("ORDER ERROR:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}
