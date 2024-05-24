var quantity;
var quantity1;
var quantity2;
var quantity3;
var quantity4;
var productName;
var productName1;
var productName2;
var productName3;
var productName4;
var productPrice1;
var productPrice2;
var productPrice3;
var productPrice4;
var productPrice5;
var productTotal = 0;
var productTotal1 = 0;
var productTotal2 = 0;
var productTotal3 = 0;
var productTotal4 = 0;
var taxAmount;
var subtotal;
var finalTotal;
var TAX_RATE = 0.13;

function addToCart() {
  productName = `Tesla Model Y`;
  productPrice = 49850;
  quantity = parseInt(prompt(`How many ${productName} would you like?`));
  while (quantity <= 0 || isNaN(quantity)) {
    quantity = parseInt(
      prompt(
        `How many ${productName} would you like? Please enter a positive number`
      )
    );
  }
  document.getElementById("quantity").innerHTML = `x ${quantity}`;

  productTotal = quantity * productPrice;

  document.getElementById("checkoutButton").hidden = false;
}

function addToCart1() {
  productName1 = `Hyundai Iconic 6`;
  productPrice1 = 36500;
  quantity1 = parseInt(prompt(`How many ${productName1} would you like?`));
  while (quantity1 <= 0 || isNaN(quantity1)) {
    quantity1 = parseInt(
      prompt(
        `How many ${productName1} would you like? Please enter a positive number`
      )
    );
  }
  document.getElementById("quantity1").innerHTML = `x ${quantity1}`;

  productTotal1 = quantity1 * productPrice1;

  document.getElementById("checkoutButton").hidden = false;
}

function addToCart2() {
  productName2 = `Volkswagen ID 4`;
  productPrice2 = 52800;
  quantity2 = parseInt(prompt(`How many ${productName2} would you like?`));
  while (quantity2 <= 0 || isNaN(quantity2)) {
    quantity2 = parseInt(
      prompt(
        `How many ${productName2} would you like? Please enter a positive number`
      )
    );
  }
  document.getElementById("quantity2").innerHTML = `x ${quantity2}`;

  productTotal2 = quantity2 * productPrice2;

  document.getElementById("checkoutButton").hidden = false;
}

function addToCart3() {
  productName3 = `Porsche Cyanide`;
  productPrice3 = 112500;
  quantity3 = parseInt(prompt(`How many ${productName3} would you like?`));
  while (quantity3 <= 0 || isNaN(quantity3)) {
    quantity3 = parseInt(
      prompt(
        `How many ${productName3} would you like? Please enter a positive number`
      )
    );
  }
  document.getElementById("quantity3").innerHTML = `x ${quantity3}`;

  productTotal3 = quantity3 * productPrice3;

  document.getElementById("checkoutButton").hidden = false;
}

function addToCart4() {
  productName4 = `Tesla Model S Plaid`;
  productPrice4 = 89650;
  quantity4 = parseInt(prompt(`How many ${productName4} would you like?`));
  while (quantity4 <= 0 || isNaN(quantity4)) {
    quantity4 = parseInt(
      prompt(
        `How many ${productName4} would you like? Please enter a positive number`
      )
    );
  }
  document.getElementById("quantity4").innerHTML = `x ${quantity4}`;

  productTotal4 = quantity4 * productPrice4;

  document.getElementById("checkoutButton").hidden = false;
}

function btnCheckout() {
  subtotal =
    productTotal +
    productTotal1 +
    productTotal2 +
    productTotal3 +
    productTotal4;
  taxAmount = subtotal * TAX_RATE;
  finalTotal = subtotal + taxAmount;

  let customerName = prompt(`What is your name?`);

  while (customerName == null || customerName.trim().length <= 0) {
    customerName = prompt(`What is your name? Please enter your correct name`);
  }

  let customerTable = `<h3>Hello, ${customerName}</h3>
  <h4>View your order details below</h4>`;

  let receiptTable = `<thead>
  <th>Product Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Amount</th>
  </thead>`;

  if (quantity > 0) {
    receiptTable += ` 
<tbody>

<tr>
  <td>${productName}</td>
  <td>$${productPrice}</td>
  <td>x${quantity}</td>
  <td>$${productTotal}</td>
</tr>

</tbody>`;
  }

  if (quantity1 > 0) {
    receiptTable += ` 
  <tbody>
  
  <tr>
    <td>${productName1}</td>
    <td>$${productPrice1}</td>
    <td>x${quantity1}</td>
    <td>$${productTotal1}</td>
  </tr>
  
  </tbody>`;
  }

  if (quantity2 > 0) {
    receiptTable += ` 
    <tbody>
    
    <tr>
      <td>${productName2}</td>
      <td>$${productPrice2}</td>
      <td>x${quantity2}</td>
      <td>$${productTotal2}</td>
    </tr>
    
    </tbody>`;
  }

  if (quantity3 > 0) {
    receiptTable += ` 
      <tbody>
      
      <tr>
        <td>${productName3}</td>
        <td>$${productPrice3}</td>
        <td>x${quantity3}</td>
        <td>$${productTotal3}</td>
      </tr>
      
      </tbody>`;
  }

  if (quantity4 > 0) {
    receiptTable += ` 
        <tbody>
        
        <tr>
          <td>${productName4}</td>
          <td>$${productPrice4}</td>
          <td>x${quantity4}</td>
          <td>$${productTotal4}</td>
        </tr>
        
        </tbody>`;
  }

  let orderSummary = `<br>
  <h3><br>Order Summary </h3><tbody> `;

  orderSummary += `<tr>
<td>Shipping </td>
<td>Free </td>
</tr>
<tr>
<td>Subtotal </td>
<td>$ ${subtotal} </td>
</tr>
<tr>
<td>GST (13%) </td>
<td>$ ${taxAmount} </td>
</tr>
<tr>
<td>Total</td>
<td>$ ${finalTotal} </td>
</tr></tbody>`;

  document.getElementById("cusomterField").innerHTML = customerTable;
  document.getElementById("checkoutReceipt").innerHTML = receiptTable;
  document.getElementById("orderSummary").innerHTML = orderSummary;
  document.getElementById("checkoutButton").disabled = true;
  document.getElementById("addToCartButton").disabled = true;
  document.getElementById("addToCartButton1").disabled = true;
  document.getElementById("addToCartButton2").disabled = true;
  document.getElementById("addToCartButton3").disabled = true;
  document.getElementById("addToCartButton4").disabled = true;
  document.getElementById("orderNew").hidden = false;
}
