import { useState } from 'react'
import Header from './components/Header/Header'
import ResultsTable from './components/ResultsTable/ResultsTable'
import UserInput from './components/UserInput/UserInput'
import { InvestmentCalculateInput } from './models/InvestmentCalculateInput'

function App() {
  const [userInput, setUserInput] = useState<InvestmentCalculateInput>()

  const calculateHandler = (userInput: InvestmentCalculateInput) => {
    setUserInput(userInput)
  }

  const yearlyData = []
  if (userInput) {
    let currentSavings = userInput['current-savings']
    const yearlyContribution = userInput['yearly-contribution']
    const expectedReturn = userInput['expected-return'] / 100
    const duration = userInput['duration']

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>No investment calculate yet.</p>
      )}
      {userInput && (
        <ResultsTable
          yearData={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  )
}

export default App
