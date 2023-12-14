const Alert = {
    template: `
        <div class="alert alert-danger"> {{texto}} </div>
    `,
    props:{
        texto: String
    }
}

export {Alert}