import { Alert } from "./alert.js";
const App = {
    data: () => {
        return {
            nome: "App"
        }
    },
    template: `
        <h1>
            {{ nome }}
        </h1>
        <p>
            {{ bemVindo }}
        </p>
        <p>
            <Alert texto="Esse é um conponete!" />
        </p>
        <input type="button" value="Ola" @click="ola()">
    `,
    methods:{
        ola(){
            alert('oi');
        }
    },
    computed:{
        bemVindo(){
            return 'Bem Vindo ao ' + this.nome
        }
    },
    components:{
        Alert
    }    
}

export {App}