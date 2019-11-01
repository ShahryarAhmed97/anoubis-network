/**
 * Track the trade of a commodity from one trader to another
 * @param {com.anoubis.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeCommodity(trade) { // eslint-disable-line no-unused-vars

    // set the new owner of the commodity
    trade.commodity.owners.push(trade.newOwner);
    trade.commodity.owner = trade.newOwner;
    const assetRegistry = await getAssetRegistry('com.anoubis.Commodity');

    // emit a notification that a trade has occurred
    //const tradeNotification = getFactory().newEvent('com.anoubis.trading', 'TradeNotification');
    //tradeNotification.commodity = trade.commodity;
    //emit(tradeNotification);

    // persist the state of the commodity
    await assetRegistry.update(trade.commodity);
}
