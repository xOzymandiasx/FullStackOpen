import React from "react";
import StatisticLine from "./StatisticLine ";

const Statics = ({ data }) => {
  const { good, neutral, bad } = data;
  let totalComents = good + neutral + bad;

  return (
    <>
      {totalComents === 0 ? (
        <p>No coments given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="Good" value={good}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="Neutral" value={neutral}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="Bad" value={bad}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="All comments" value={totalComents}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="Average" value={(good - bad) / totalComents}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="Positive" value={100 - (100 * (totalComents - good)) / totalComents}/></td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statics;
