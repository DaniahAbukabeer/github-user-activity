console.log("Hello from my CLI!");
console.log(`
 ▗▄▄▖▗▄▄▄▖▗▄▄▄▖▗▖ ▗▖▗▖ ▗▖▗▄▄▖     ▗▖ ▗▖ ▗▄▄▖▗▄▄▄▖▗▄▄▖      ▗▄▖  ▗▄▄▖▗▄▄▄▖▗▄▄▄▖▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖▗▖  ▗▖
▐▌     █    █  ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌    ▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌    ▐▌ ▐▌▐▌     █    █  ▐▌  ▐▌  █    █   ▝▚▞▘ 
▐▌▝▜▌  █    █  ▐▛▀▜▌▐▌ ▐▌▐▛▀▚▖    ▐▌ ▐▌ ▝▀▚▖▐▛▀▀▘▐▛▀▚▖    ▐▛▀▜▌▐▌     █    █  ▐▌  ▐▌  █    █    ▐▌  
▝▚▄▞▘▗▄█▄▖  █  ▐▌ ▐▌▝▚▄▞▘▐▙▄▞▘    ▝▚▄▞▘▗▄▄▞▘▐▙▄▄▖▐▌ ▐▌    ▐▌ ▐▌▝▚▄▄▖  █  ▗▄█▄▖ ▝▚▞▘ ▗▄█▄▖  █    ▐▌  
                                                                                                                                                            
 `);



const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fetchUserData = async () => {
    const username = await rl.question(`What's your github username?\n`);
    rl.close();
    console.log('hehe');
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        // console.log('the api response', response);
        if (!response.ok) {
            throw new Error('http request failedddd', response.status);
        } else {
            console.log(`OUTPUT`);
            console.log(`-PUSHED `, response.length() , `commits to`);

            // return response;
        }
    } catch (err) {
        console.error('an issue happened with the network sorry buddy', err);
    }
}


const userGithubData = fetchUserData();

// console.log(userGithubData);
