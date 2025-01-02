import Image1 from '/assets/Portfolio1.png';
import Image2 from '/assets/Portfolio2.png';
import Image3 from '/assets/Portfolio3.png';


export const images = [Image1, Image2, Image3];

export const titles = [
    'Investigating Quadrupedal Robotics Learning in a Simulated Environment using Unity ML-Agent', 

    'Narrative Video: Artificial Intelligence (Reinforcement Learning)', 

    'Virtual Reality (VR) Mansion Horror Game',
];

export const texts = [
    'This project explores training a quadrupedal robot using Deep Reinforcement Learning (DRL) in a 3D simulation environment with Unity ML-Agents Toolkit. Leveraging Proximal Policy Optimization (PPO) and Soft Actor-Critic (SAC) algorithms, the robot was trained to stand, balance, and move toward targets. Results showed SAC outperformed PPO, offering more efficient training. Joint force data was also analyzed, providing insights valuable for real-world hardware design. This study demonstrates the potential of DRL for developing intelligent, autonomous robotic systems.',

    {
        text: 'For this project, I created a digital narrative video on Artificial Intelligence, focusing on Reinforcement Learning. This topic aligned with my Final Year Project, making it a meaningful choice. The video was designed for a general audience, prioritizing clarity and accessibility. While maintaining essential information, I emphasized my editing skills, crafting an engaging and visually appealing presentation that simplifies complex concepts for better understanding. You can watch the video ',
        link: {
            url: 'https://www.youtube.com/embed/cglpB2LLGJA?si=xDvXNvP_997YWHof',
            text: 'here on YouTube',
        },
    },

    'For this project, I developed a VR horror game set in a mansion, utilizing assets provided by our lecturer. The gameplay is divided into two phases: exploration and escape. In the exploration phase, players search for clues and solve puzzles to progress. Once a critical point is reached, the game shifts into an adrenaline-pumping escape sequence, where players must navigate obstacles to reach the exit. This project highlights my ability to design immersive gameplay mechanics and create engaging player experiences in a VR environment.',
];