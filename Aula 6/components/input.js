export default {
    template:`
        <input :style='style' type='text' :value='texto' :placeholder='placeholder'/>
    `,
    //props:['texto']
    // props:{
    //     texto: String
    // }
    props:{
        texto: {
            type: String,
            required: true,
            validator(value){
                return value.includes('@')
            }
        },
        placeholder:{
            type: String,
            required: true
        },
        style:{
            type: Object,
            required: true,
            default: 'color: red'
        }
    }
}