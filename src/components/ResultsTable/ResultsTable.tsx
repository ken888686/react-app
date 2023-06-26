type ResultsTableProps = {
  initialInvestment: number
  yearData: {
    year: number
    yearlyInterest: number
    savingsEndOfYear: number
    yearlyContribution: number
  }[]
}

const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function ResultsTable({ initialInvestment, yearData }: ResultsTableProps) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearData.map((x) => {
          return (
            <tr key={x.year}>
              <td>{x.year}</td>
              <td>{formatter.format(x.savingsEndOfYear)}</td>
              <td>{formatter.format(x.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  x.savingsEndOfYear -
                    initialInvestment -
                    x.yearlyContribution * x.year,
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment + x.yearlyContribution * x.year,
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ResultsTable
