import Input from "./components/input.js";


export default {
    template: `
        <p> {{ nomeApp }} </p>
        <p> {{ nomeAlterado }} </p>
        <Input 
            texto='@Emanuel de Oliveira Santos' 
            placeholder='placeholder....'
            style='color: green'
        />
    `,
    data: function (){
        return {
            nomeApp: "App de teste"
        }
    },
    computed: {
        nomeAlterado(){
            return this.nomeApp + ', propriedade computada...' 
        }
    },
    components:{
        Input
    }
};