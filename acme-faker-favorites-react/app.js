const app = document.querySelector('#app');
//console.log(faker.helpers.createCard())




const e = React.createElement;

//const header = e('h1', null, 'Acme Faker Favorites');

// different app elements:
/*
    Structure:
    App
        div = Counter Container
            1. Header 
            2. Counter 
                a. click on Favorites counter, it adds a new name card
            3. cards
                a. Full Name
                b. Username
*/

class Header extends React.Component {
    render() {
        return e(
            'h1',
            null,
            'Acme Faker Favorites',
        )
    }
}

class Counter extends React.Component {
    render() {
        const { count } = this.props;

        return e(
            'span',
            {
                style: {
                    textAlign: 'center',
                },
            },
            //null,
            `You have ${count} favorite users!`,
        )
    }
}

class Users extends React.Component {
    // state = {
    //     people: this.generateUsers(),
    // }
    
    
    
    render() {
        const { people } = this.props;

        return e(
            'div',
            null,
            `Name: ${people.name} | user: ${people.username}`,
        )
    }
}

class CounterContainer extends React.Component {
    // state = {
    //     count: 0,
    //     people: this.generateUsers(),
    //     // people: () => {
    //     //     faker.helpers.createCard()
    //     // },
    // };

    // state = {
    //     count: 0,
    //     //generateUsers: this.generateUsers(),
    //     people: this.generateUsers()
    // };
    
    generateUsers = () => {
        const userNum = 20;
        const users = [];
        for(let i=0; i < userNum; i++) {
            users.push(faker.helpers.createCard());
        }

        const nameCardVals = users.map(el => {
            const fullName = el.name;
            const username = el.username;
            const randNum = Math.floor(Math.random() * 10 + 1);
            let isFavorite = false;
            if (randNum > 5) isFavorite = true;
            
            const retObj = {
                fullName,
                username,
                isFavorite,
            }
            return retObj;
        })

        //const { people } = this.state;
        return nameCardVals;
        //console.log(this.state);
        //console.log(nameCardVals);
    }
    

    state = {
        count: 0,
        people: this.generateUsers(),
    };

    

    incrementFunc = () => {
        const { count } = this.state;

        this.setState({
            count: count + 1,
        })
    }

    render() {
        const { count, people} = this.state;
        //this.generateUsers()
        console.log(this.state);
        return e(
            'div',
            {
                id: 'counter_container',
            },
            e(
                Header,
            ),
            e(
                Counter,
                {
                    count,
                }
            ),
            e(
                Users,
                {
                    people,
                }
            )
        )
    }
}


ReactDOM.render(
    e(CounterContainer),
    app,
    () => {
        console.log('I have rendered!');
    }
);