import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Bar } from 'react-chartjs-2'; // Importing the Bar chart component from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function App(props) {
  const cardData = [
    { title: 'Body text', value: 100, icon: '⏱️' },
    { title: 'Total Roll-Out', value: 100, icon: '📦' },
    { title: 'Defects detected', value: 100, icon: '❗' },
    { title: 'Check Non-Adherence', value: 100, icon: '👁️' },
    { title: 'Total Defects', value: 100, icon: '📈' },
  ];
  const dummyData = {
    labels: ['January', 'February', 'March', 'April'], // months or any categories you want
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81], // dummy values
        backgroundColor: 'rgba(0, 123, 255, 0.7)', // color for bars
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dataset 2',
        data: [45, 69, 70, 91], // another set of dummy values
        backgroundColor: 'rgba(40, 167, 69, 0.7)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='dashboard-wrapper mx-auto'>
      <div className='container-fluid py-3 px-4'>
        {/* Section 1: Filters + Search */}
        <div className='row g-3 mb-4 border rounded pb-3 mt-3 mt-md-0 bg-white'>
          {/* Plant */}
          <div className='col-12 col-md'>
            <select className='form-select'>
              <option>Plant</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Chennai</option>
            </select>
          </div>

          {/* Factory */}
          <div className='col-12 col-md'>
            <select className='form-select'>
              <option>Factory</option>
              <option>Factory A</option>
              <option>Factory B</option>
              <option>Factory C</option>
              <option>Factory D</option>
            </select>
          </div>

          {/* Station */}
          <div className='col-12 col-md'>
            <select className='form-select'>
              <option>Station</option>
              <option>Station 1</option>
              <option>Station 2</option>
              <option>Station 3</option>
              <option>Station 4</option>
            </select>
          </div>

          {/* Date */}
          <div className='col-12 col-md'>
            <input type='date' className='form-control' />
          </div>

          {/* Search Button */}
          <div className='col-12 col-md-2'>
            <button className='btn btn-primary w-100'>Search</button>
          </div>
        </div>

        {/* Section 2: Cards */}
        <div className='row g-3 mb-4'>
          {cardData.map((card, i) => (
            <div key={i} className='col-12 col-md'>
              <div className='card text-center h-100'>
                <div className='card-body'>
                  <div className='fs-3'>{card.icon}</div>
                  <h5 className='card-title'>{card.title}</h5>
                  <p className='card-text fw-bold'>{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: Rectangle Cards */}
        <div className='row g-3 mb-4'>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className='col-12 col-md-3'>
              <div className='card position-relative'>
                {/* Colored shares with sharp edge */}
                <div
                  className='position-absolute top-0 end-0 p-2'
                  style={{
                    width: '45%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 0, 0, 0.35)', // fade red
                    zIndex: 2,
                    clipPath:
                      'polygon(100% 0, 100% 100%, 0 100%, 0 50%, 100% 0)', // sharp edge at middle
                  }}
                >
                  {/* Text on the first red share */}
                  <div
                    className='position-absolute top-50 start-50 translate-middle text-white'
                    style={{ fontWeight: 'bold' }}
                  >
                    2000
                  </div>
                </div>
                <div
                  className='position-absolute top-0 end-0 p-2'
                  style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)', // medium red
                    zIndex: 2,
                    clipPath:
                      'polygon(100% 0, 100% 100%, 0 100%, 0 50%, 100% 0)', // sharp edge at middle
                  }}
                >
                  {/* Text on the second red share */}
                  <div
                    className='position-absolute top-50 start-50 translate-middle text-white'
                    style={{ fontWeight: 'bold' }}
                  >
                    2000
                  </div>
                </div>
                <div
                  className='position-absolute top-0 end-0 p-2'
                  style={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: 'rgba(139, 0, 0, 0.7)', // dark red
                    zIndex: 3,
                    clipPath:
                      'polygon(100% 0, 100% 100%, 0 100%, 0 50%, 100% 0)', // sharp edge at middle
                  }}
                >
                  {/* Text on the third red share */}
                  <div
                    className='position-absolute top-50 start-50 translate-middle text-white'
                    style={{ fontWeight: 'bold' }}
                  >
                    2000
                  </div>
                </div>
                {/* Card content */}
                <div className='card-body position-relative'>
                  Rectangle Card {i}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 4: Graphs */}
        <div className='row g-3'>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className='col-12 col-md-6'>
              <div className='graph d-flex justify-content-center align-items-center'>
                <Bar data={dummyData} options={{ responsive: true }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
