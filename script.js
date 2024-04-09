function calculateBrokerage() {
    const buyAmount = parseFloat(document.getElementById('buyAmount').value);
    const sellAmount = parseFloat(document.getElementById('sellAmount').value);
    const numShares = parseInt(document.getElementById('numShares').value);
    const brokerageApp = parseFloat(document.getElementById('brokerageApp').value);
    const currency = document.querySelector('input[name="currency"]:checked').value;

    if (isNaN(buyAmount) || isNaN(sellAmount) || isNaN(numShares)) {
        alert('Please enter valid numbers.');
        return;
    }

    let totalAmount;
    if (currency === 'rupees') {
        totalAmount = (buyAmount * brokerageApp / 100) + (sellAmount * brokerageApp / 100);
    } else if (currency === 'dollars') {
        // Conversion rate for dollars to rupees
        const conversionRate = 83.5;
        totalAmount = ((buyAmount * brokerageApp / 100) + (sellAmount * brokerageApp / 100)) * conversionRate;
    }

    document.getElementById('result').innerHTML = `Total Brokerage Amount: ${totalAmount.toFixed(2)} ${currency}`;
}
