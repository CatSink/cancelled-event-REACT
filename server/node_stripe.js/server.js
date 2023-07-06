/*const express = require('express');
const cors = require('cors');

const striperoutes = require('./routes/stripe-routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api/stripe', striperoutes);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
*/

const stripe = require('stripe')('sk_test_51NOVuVKkLuEJzlLFbdMnfjIcAe98oy7aR82NzUVW9YJhOUzPAzjJHRQW6DAk9HjOP6ipvFWR8fqE2MgNwBukA89300OaMzMtuQ');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));

