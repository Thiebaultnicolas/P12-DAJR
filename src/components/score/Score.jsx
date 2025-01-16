import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Score.css'; // Styles externes

const Score = ({data: d}) => {
    // Données pour le cercle
    const data = [
      { name: 'Progression', value: (d.todayScore) * 100 }, // Partie rouge
      { name: 'Reste', value: (1 - d.todayScore) * 100 }, // Partie grise
    ];

    const COLORS = ['#FF0101', '#E8E8E8']; // Couleurs : rouge et gris

    const renderCustomizedLabel = () => {
      return (
        <>
          <text x="50%" y="40%" fill="black" textAnchor="middle" dominantBaseline="central" fontSize={20} fontWeight={'bold'}>
          {d.todayScore * 100}% 
          </text>
          <text x="50%" y="55%" textAnchor="middle" dominantBaseline="central" fontSize={12} fill="#74798C">
            de votre 
          </text>
          <text x="50%" y="65%" textAnchor="middle" dominantBaseline="central" fontSize={12} fill="#74798C">objectif</text>
        </>
        
    
      );
    };
  
    return (
      <div className="score-container">
        <h3 className="score-title">Score</h3> {/* Titre au-dessus */}
        <ResponsiveContainer width="100%" height="100%"> {/* Graphique responsive */}
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%" // Position X
              cy="50%" // Position Y
              startAngle={90} // Début à 12h
              endAngle={450} // Fin à 12h (360° + 90°)
              innerRadius={70} // Cercle interne
              outerRadius={80} // Cercle externe
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} /> // Couleur par segment
              ))}
            </Pie>
          </PieChart>
          </ResponsiveContainer>
        {/*<div className="score-text">
          <p className="score-percentage">12%</p> 
          <p className="score-subtext">de votre objectif</p> 
        </div>*/}
      </div>
    );
  };
  
  export default Score;