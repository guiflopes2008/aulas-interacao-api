const cepInput = document.querySelector("#cep")
//querySelector chama so uma classe

//addEventListener 
cepInput.addEventListener("blur", () => {



    const cep = cepInput.value.replace(/\D/g, '')
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.querySelector("#logradouro").value = data.logradouro

                    document.querySelector("#complemeto").value = data.complemeto

                    document.querySelector("#bairro").value = data.bairro

                    document.querySelector("#cidade").value = data.localidade

                    document.querySelector("#estado").value = data.uf
                }else{
                    console.log("Cep não encontrado")
                }
            })
    }else{
        alert("CEP Inválido")
    }
})