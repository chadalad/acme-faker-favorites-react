const state = {
    customers : [
        { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
        { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
        { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
       ]
}

const app = document.querySelector('#app');

const createFormContainer = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    return formContainer;
}

const createForm = () => {
    const nameInput = document.createElement('input');
    const dateInput = document.createElement('input');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('label', 'VIP');
    const submitButton = document.createElement('button');

    const name = nameInput.addEventListener('input', (ev) => {
        return ev.target.value;
    });

    const date = dateInput.addEventListener('input', (ev) => {
        return ev.target.value;
    });

    const isVIP = checkbox.addEventListener('input', (ev) => {
        console.log(ev.target.value);
    })

    submitButton.addEventListener('click', (ev) => {
        
    });


    const formContainer = createFormContainer();
    formContainer.append(nameInput);
    formContainer.append(dateInput);
    formContainer.append(checkbox);
    formContainer.append(submitButton);
    app.append(formContainer);
}

const createCustomerList = () => {
    const customerListContainer = document.createElement('div');
    customerListContainer.classList.add('customerListContainer');
    //app.append(createCustomerBox());
    return customerListContainer;
}

const createCustomerBox = () => {
    const customerBox = document.createElement('div');
    customerBox.classList.add('customerBox');
    return customerBox;
}


const createTitle = () => {
    const title = document.createElement('h1');
    title.innerText = 'ACME Customers VIP';
    app.append(title);
}


const cardMapper = () => {
    state.customers.forEach(currentCustomer => {
        const box = createCustomerBox();
        if (currentCustomer.isVIP) {
            box.classList.add('customerBoxVIP');
        } else {
            box.classList.add('customerBoxNormal');
        }
        box.innerText = `${currentCustomer.name} Joined on ${currentCustomer.dateJoined} And has been a member for `;
        app.append(box);
    })
}


const render = () => {
    createTitle();
    createForm();
    cardMapper();
    createCustomerList();
}

render();

