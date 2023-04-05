const openai = require('openai');

const { Configuration, OpenAIApi } = require('openai');

const messageFromArg = process.argv.slice(2).join(' ');

// console.log(`${messageFromArg}`);

async function myCode() {
	const configuration = new Configuration({
		apiKey: '',
	});
	const openai = new OpenAIApi(configuration);

	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'you help programmers in terminal, they will send things try to answer; keep answers very short and concise',
			},
			{
				role: 'user',
				content: messageFromArg,
			},
		],
		temperature: 0,
		max_tokens: 50,
	});

	console.log(completion.data.choices[0].message.content);
}

myCode();
