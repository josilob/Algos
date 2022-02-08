// DEMAND
const salesOrders = [
	{
		id: 'S1',
		created: '2020-01-02',
		quantity: 6
	},
	{
		id: 'S2',
		created: '2020-11-05',
		quantity: 2
	},
	{
		id: 'S3',
		created: '2019-12-04',
		quantity: 3
	},
	{
		id: 'S4',
		created: '2020-01-20',
		quantity: 2
	},
	{
		id: 'S5',
		created: '2019-12-15',
		quantity: 9
	}
];

// SUPPLY;
const purchaseOrders = [
	{
		id: 'P1',
		receiving: '2020-01-04',
		quantity: 4
	},
	{
		id: 'P2',
		receiving: '2020-01-05',
		quantity: 3
	},
	{
		id: 'P3',
		receiving: '2020-02-01',
		quantity: 5
	},
	{
		id: 'P4',
		receiving: '2020-03-05',
		quantity: 1
	},
	{
		id: 'P5',
		receiving: '2020-02-20',
		quantity: 7
	}
];

function allocate(salesOrders, purchaseOrders) {
	let inventory = 0,
		demand = 0;
	const solution = [];

	const sortedDemand = salesOrders.sort(
		(a, b) => new Date(a.created) - new Date(b.created)
	);
	const sortedSupply = purchaseOrders.sort(
		(a, b) => new Date(a.receiving) - new Date(b.receiving)
	);

	// for each sales order we wait on the supply to match the demand so we can fulfill the request
	// once true, ship the order the same date we acquire the necessary quantity
	// repeat until we run out of supply or until all sales are met

	sortedDemand.forEach((order) => {
		demand = order.quantity;

		for (let i = 0; i < sortedSupply.length; i++) {
			inventory += sortedSupply[i].quantity;
			sortedSupply[i].quantity = 0;

			if (inventory >= demand && inventory !== 0) {
				solution.push({
					salesID: order.id,
					orderShipped: sortedSupply[i].receiving
				});
				inventory -= demand;
				demand = 0;
				break;
			}
		}
	});
	return solution;
}

console.log(allocate(salesOrders, purchaseOrders));

// SORTED ARRAYS BY THE DATE ASC
// Cant ship the order until there's enough items in the inventory matching the demand
// [
// 	[
// 		{ id: 'S3', created: '2019-12-04', quantity: 3 },
// 		{ id: 'S5', created: '2019-12-15', quantity: 9 },
// 		{ id: 'S1', created: '2020-01-02', quantity: 6 },
// 		{ id: 'S4', created: '2020-01-20', quantity: 2 },
// 		{ id: 'S2', created: '2020-11-05', quantity: 2 }
// 	],
// 	[
// 		{ id: 'P1', receiving: '2020-01-04', quantity: 4 },
// 		{ id: 'P2', receiving: '2020-01-05', quantity: 3 },
// 		{ id: 'P3', receiving: '2020-02-01', quantity: 5 },
// 		{ id: 'P5', receiving: '2020-02-20', quantity: 7 },
// 		{ id: 'P4', receiving: '2020-03-05', quantity: 1 }
// 	]
// ];
