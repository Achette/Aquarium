/* eslint-disable */
// @ts-nocheck


export function Compute(form) {
  let N = 0
  let SUM = 0.0
  let Std = 0.0
  let SKStd = 0.0
  // let KUStd = 0.0
  const theList = []
  let Mediana = 0.0
  let theQ1 = 0.0
  let theQ3 = 0.0

  // Calcula a média
  // Loop através de todas as entradas, adiciona aquelas que têm valores válidos
  for (const element of form) {
    const value = element
    if (!isNaN(value)) {
      SUM += value
      N++
      theList.push(value)
    }
  }

  if (N <= 3) {
    alert('Dados insuficientes (o tamanho mínimo é 4)')
  } else {
    const TOTAL = N // número de obErroPadraoMediarvações
    // Do the math
    const x = SUM / N
    const y = Math.round(10000000 * x) / 10000000
    const Media = y
    let MAD = 0

    // Calcula o Desvio Padrão
    // Loop por todas as entradas, adiciona isto àqueles valores válidos
    for (const element of form) {
      const value = element
      if (!isNaN(value)) {
        Std += Math.pow(value - x, 2)
        MAD += Math.abs(value - x)
        SKStd += Math.pow(value - x, 3)
        //   KUStd += Math.pow(value - x, 4)
      }
    }

    MAD = MAD / N
    const DesvioAbsolutoMedia = Math.round(10000000 * MAD) / 10000000
    const V1 = Std / (N - 1)
    const V = Math.round(10000000 * V1) / 10000000
    const b = Math.sqrt(V)
    const DesvioPadrao = Math.round(10000000 * b) / 10000000
    const Variancia = V

    // Calcular a Moda
    const frequencyCounter = {}
    form.forEach((number) => {
      frequencyCounter[number] = (frequencyCounter[number] || 0) + 1
    })

    let moda = []
    let maxFrequency = 0

    // Encontrar o numero de maior frequencia
    for (const number in frequencyCounter) {
      const frequency = frequencyCounter[number]

      if (frequency > maxFrequency) {
        moda = [number]
        maxFrequency = frequency
      } else if (frequency === maxFrequency) {
        moda.push(number)
      }
    }

    moda = moda.length === form.length ? 'não há moda' : +moda[0]

    // Calcula a Distorção
    const SK1 = SKStd / (N - 1)
    const b3 = Math.pow(b, 3)
    const SK2 = SK1 / b3
    const Distorcao = Math.round(10000000 * SK2) / 10000000

    // **Cálculo da Assimetria**
    const Assimetria = (function skewness(data) {
      const meanValue =
        data.reduce((sum, value) => sum + value, 0) / data.length
      const stdDev = Math.sqrt(
        data.reduce((sum, value) => sum + Math.pow(value - meanValue, 2), 0) /
          (data.length - 1)
      )
      const n = data.length
      const skew =
        (data.reduce((sum, value) => sum + Math.pow(value - meanValue, 3), 0) *
          n) /
        ((n - 1) * (n - 2) * Math.pow(stdDev, 3))
      return skew
    })(form)

    // Calcula a Curtose ErroPadrao Media
    const Curtose = (function kurtosis(arr) {
      if (!Array.isArray(arr)) {
        throw new TypeError(
          'Curtose inválida. Necessário um array de ao menos 4 elementos'
        )
      }

      const len = arr.length
      let delta = 0
      let delta_n = 0
      let delta_n2 = 0
      let term1 = 0
      let N = 0
      let mean = 0
      let M2 = 0
      let M3 = 0
      let M4 = 0
      let g

      for (let i = 0; i < len; i++) {
        N += 1

        delta = arr[i] - mean
        delta_n = delta / N
        delta_n2 = delta_n * delta_n

        term1 = delta * delta_n * (N - 1)

        M4 +=
          term1 * delta_n2 * (N * N - 3 * N + 3) +
          6 * delta_n2 * M2 -
          4 * delta_n * M3
        M3 += term1 * delta_n * (N - 2) - 3 * delta_n * M2
        M2 += term1
        mean += delta_n
      }

      // Calculate the population excess kurtosis:
      g = (N * M4) / (M2 * M2) - 3
      // Return the corrected sample excess kurtosis:
      return ((N - 1) / ((N - 2) * (N - 3))) * ((N + 1) * g + 6)
    })(form)

    // Calcula o Coeficiente de Variância
    const CV = Math.abs(b / x)
    const CV1 = Math.round(1000000 * CV) / 1000000
    const CoeficienteVariacao = Number.isFinite(CV1) ? CV1 : 'Não existe'

    // Ordena a lista
    theList.sort((a, b) => a - b)
    // Mostra os valores MIN e MAX
    const MINValue = theList[0] // valor MIN
    const MAXValue = theList[N - 1] // valor MAX

    let aux = 0
    if (N % 2 === 1) {
      aux = Math.floor(N / 2)
      Mediana = theList[aux]
    } else {
      Mediana = (theList[N / 2] + theList[N / 2 - 1]) / 2
    }

    const t = Math.floor(N / 4)
    if (4 * t === N) {
      theQ1 = (theList[t - 1] + theList[t]) / 2
      const Q = 3 * t
      theQ3 = (theList[Q] + theList[Q - 1]) / 2
    } else {
      theQ1 = theList[t]
      theQ3 = theList[N - t - 1]
    }

    const theQrange = (theQ3 - theQ1) / (theQ3 + theQ1)
    const CoeficienteVariacaoQuartil = Number.isFinite(theQrange)
      ? theQrange.toFixed(6)
      : 'Não existe'
    const DesvioQuartilico = (theQ3 - theQ1) / 2
    const IntervaloTotal = theList[N - 1] - theList[0]
    const InterQuartilico = theQ3 - theQ1
    const ErroPadraoMedia = Math.round(1000000 * (b / Math.sqrt(N))) / 1000000

    return {
      TOTAL, // Quantidade total de elementos
      Media,
      Variancia,
      DesvioPadrao,
      CoeficienteVariacao,
      Distorcao,
      Curtose,
      ErroPadraoMedia,
      Mediana,
      moda,
      MAXValue,
      MINValue,
      IntervaloTotal,
      theQ1, // primeiro quartil
      CoeficienteVariacaoQuartil,
      theQ3, // terceiro quartil
      InterQuartilico,
      DesvioQuartilico,
      DesvioAbsolutoMedia,
      Assimetria,
      Soma: SUM,
    }
  }
}


