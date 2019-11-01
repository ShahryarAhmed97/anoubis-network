/**
 * Track the trade of a commodity from one trader to another
 * @param {com.anoubis.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeCommodity(trade) { // eslint-disable-line no-unused-vars

    // set the new owner of the commodity
    trade.product.owners.push(trade.newOwner);
    trade.product.owner = trade.newOwner;
    const assetRegistry = await getAssetRegistry('com.anoubis.Product');

    await assetRegistry.update(trade.product);
}
