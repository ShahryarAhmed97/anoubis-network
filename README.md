# Anoubis Network

> This Business Network illustrates commodity trading in Anoubis system.

This business network defines:

**Participant**
`Trader`

**Asset**
`Commodity`

**Transaction(s)**
`Transaction`

**Event**
`TradeNotification `

To test this Business Network Definition in the **Test** tab:

Create two `Trader` participants:

```
{
  "$class": "com.anoubis.Trader",
  "tradeId": "TRADER1",
  "name": "Jenny"
}
```

```
{
  "$class": "com.anoubis.Trader",
  "tradeId": "TRADER2",
  "name": "Amy"
}
```

Create a `Commodity` asset:

```
{
  "$class": "com.anoubis.Commodity",
  "id": "tshir1",
  "name": "Leopard",
  "collection": "Collection 2020",
  "size: "XS",
  "colour: "Black",
  "amount": 10,
  "imageUrl": "https://www.anoubis.com/tshirt1",
  "details": "2020 collection for summers",
  "registrationDate": 1568204263,
  "owner": "resource:com.anoubis.Trader#TRADER1"
}
```

Submit a `Trade` transaction:

```
{
  "$class": "com.anoubis.Trade",
  "commodity": "resource:com.anoubis.Commodity#ABC",
  "newOwner": "resource:com.anoubis.Trader#TRADER2"
}
```

After submitting this transaction, you should now see the transaction in the transaction registry. As a result, the owner of the commodity `tshir1` should now be owned `TRADER2` in the Asset Registry.

Congratulations!
