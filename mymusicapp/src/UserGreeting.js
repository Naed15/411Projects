class UserGreeting extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
    isLoggedIn: true
    };
    }
    
    doLogIn = () => {
    this.state({ isLoggedIn: true})
    }
    
    
    render() {
    return this.state.isLoggedIn ? <Dashboard /> : <div>Welcome Guest</div>;
    }
    }
    export default UserGreeting;