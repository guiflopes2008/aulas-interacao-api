const cepInput = document.querySelector("#cep")
//querySelector chama so uma classe

//addEventListener 
cepInput.addEventListener("blur", () => {


/*
    Sobre a regex
    /.../ - Delimita a expressão regular

    \D - É o inverso de \d, ou seja, "qualquer caractere que não seja digito" (0 a 9)

    g - É a flag global, que faz a substituição ocorrer em todas as ocorrências em texto.

    Exemplo:

    Se o usuário digita 88.000-000
    a função fará '88.000-000'.replace(/\d/g,'') //
    Resultado: '88000000'

    */
    const cep = cepInput.value.replace(/\D/g, '')
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.querySelector("#logradouro").value = data.logradouro

                    document.querySelector("#complemento").value = data.complemento

                    document.querySelector("#bairro").value = data.bairro

                    document.querySelector("#cidade").value = data.localidade

                    document.querySelector("#estado").value = data.uf
                }else{
                    console.log("Cep não encontrado")
                }
            })
            .catch(error =>{
                alert("erro ao buscar o cep")
                console.error(error)
            })
    }else{
        alert("CEP Inválido")
    }
})