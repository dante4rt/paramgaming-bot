# paramgaming-bot

paramgaming-bot is a Node.js script designed to interact with the Param Gaming API to fetch tasks, clear them, and claim rewards automatically.

## Register

Here is the link: https://paramgaming.com/?referCode=6C0ADF94FB#/signup

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dante4rt/paramgaming-bot.git
   ```

2. Install dependencies:

   ```bash
   cd paramgaming-bot
   npm install
   ```

3. Create a `.env` file in the root directory and provide the following environment variables:

   ```plaintext
   USER_EMAIL=your-email@example.com
   USER_PASSWORD=your-password
   ```

## Usage

To run the bot, execute the following command:

```bash
npm start
```

The bot will log in to your Param Gaming account, fetch incomplete tasks, clear them, and claim rewards.

### Obtaining Authorization Token

To obtain the authorization token required for the bot, follow these steps:

1. Open the Param Gaming website and log in to your account.
2. Open the Developer Tools (usually by pressing F12 or right-clicking and selecting "Inspect").
3. Navigate to the "Network" tab.
4. Perform any action on the Param Gaming website that requires authorization, such as fetching tasks.
5. Look for a request in the Network tab that contains the authorization token in the request headers.
6. Copy the authorization token from the request headers.
7. Paste the authorization token.
8. Done!

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.