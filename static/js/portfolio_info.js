// portfolioInfo
// This object provides the project info for the list of projects
portfolioInfo = [
    {   projectName: 'Diabetic Retinopathy Detection',
        description: 'Convolutional Neural Network used to classify retinal images for various stages of diabetic retinopathy, a disease which can lead to blindness',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/Diabetic_Retinopathy_Detection/blob/master/README.md' },
            {linkTag: 'Report/Analysis', linkURL: 'https://github.com/daddyjab/Diabetic_Retinopathy_Detection/blob/master/Report-Diabetic_Retinopathy_Augmented-96x96%2C64%2C128-DesktopCPUOnly.ipynb' }
            ],
        technologies: [
            'Kaggle', 'Keras', 'Artificial Intelligence', 'Neural Networks', 'Python', 'Image Augmentation', 'Classification', 'Jupyter Notebook', 'Machine Learning', 'Sci-Kit Learn', 'Matplotlib'
            ]
    },

    {   projectName: 'GeoTweet',
        description: 'Full-stack Interactive Dashboard of Twitter Trends',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/GeoTweet/blob/master/README.md' },
            {linkTag: 'Summary(pdf)', linkURL: 'https://github.com/daddyjab/GeoTweet/blob/master/resources/Data%20Science%20Bootcamp-Final%20Project.pdf'},
            {linkTag: 'Visualization', linkURL: 'https://geotweetapp.herokuapp.com'}
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Flask', 'SQL', 'SQLAlchemy', 'SQLite', 'Postgres', 'ETL (Extract/Transform/Load)', 'JavaScript', 'D3', 'Leaflet', 'Plotly', 'Machine Learning', 'Linear Regression', 'Heroku'
            ]
    },

    {   projectName: 'CitiBike',
        description: 'Analysis and Visualization of CitiBike Usage in the Jersey City Area',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/CitiBike/blob/master/README.md' },
            {linkTag: 'Data Munging', linkURL: 'https://github.com/daddyjab/CitiBike/blob/master/Citibike_Exploration_JAB.ipynb'},
            {linkTag: 'Visualization', linkURL: 'https://public.tableau.com/profile/jeffery.brown#!/vizhome/CitiBike_with_Paths_Idle_Time_JAB_v5/StoryCitiBike'},
            {linkTag: 'Tableau (twbx)', linkURL: 'https://github.com/daddyjab/CitiBike/raw/master/CitiBike_with_Paths_Idle_Time_JAB_v5.twbx'}
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Data Munging', 'Tableau'
            ]
    },

    {   projectName: 'CommTrends (Exploration)',
        description: 'An analysis of telecommunications trends in the U.S. (IN PROGRESS)',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/CommTrends/blob/master/README.md' }
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Flask', 'SQL', 'SQLAlchemy', 'Postgres', 'JavaScript', 'D3', 'Leaflet', 'Plotly', 'Machine Learning', 'Sci-Kit Learn'
            ]
    },

    {   projectName: 'Machine Learning Notes',
        description: 'Notes and Code Snippets for Machine Learning (supervised, unsupervised) created by me or collected and enhanced',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/ML_Notes/blob/master/README.md' },
            {linkTag: 'Visualizations', linkURL: 'https://github.com/daddyjab/ML_Notes/blob/master/README.md#visualizations' }
            ],
        technologies: [
            'Python', 'Keras', 'Neural Networks', 'Jupyter Notebook', 'Machine Learning', 'Sci-Kit Learn', 'Dataset Generation', 'Regression', 'Classification', 'Matplotlib'
            ]
    },

    {   projectName: 'Earthquake',
        description: 'Visualization of Recent Global Earthquake Activity',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/Earthquake/blob/master/README.md' },
            {linkTag: 'Visualization (D3)', linkURL: 'https://daddyjab.github.io/Earthquake/'},
            {linkTag: 'Power BI (pbix)', linkURL: 'https://github.com/daddyjab/Earthquake/raw/master/resources/USGS%20Seismic%20Events.pbix'}
            ],
        technologies: [
            'JavaScript', 'D3', 'Leaflet', 'Power BI'
            ]
    },

    {   projectName: 'I Was Poisoned',
        description: 'Extract/Transform/Load operations to support analysis of Food Poisoning incidents vs. Food Inspections',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/IWasPoisoned_ETL/blob/master/README.md' },
            {linkTag: 'Summary', linkURL: 'https://github.com/daddyjab/IWasPoisoned_ETL/blob/master/Documentation/ETL_Project_Report.ipynb' }
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'NoSQL', 'PyMongo', 'MongoDB', 'ETL (Extract/Transform/Load)', 'Web Scraping', 'BeautifulSoup', 'Splinter'
            ]
    },

    {   projectName: 'Weather by Latitude',
        description: 'Analysis of Variation in Weather at various Latitudes',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/WeatherByLatitude/blob/master/README.md'},
            {linkTag: 'Analysis', linkURL: 'https://github.com/daddyjab/WeatherByLatitude/blob/master/WeatherPy-jb.ipynb'},
            {linkTag: 'Visualization', linkURL: 'https://daddyjab.github.io/WeatherByLatitude' }
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Matplotlib', 'HTML', 'CSS', 'Bootstrap'
            ]
    },

    {   projectName: 'Mars News',
        description: 'Mars News Site, generated through Web Scraping and rendered as a responsive page',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/MarsNews/blob/master/README.md' },
            {linkTag: 'Sample', linkURL: 'https://github.com/daddyjab/MarsNews/blob/master/docs/MarsNews-sample.png' }
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Flask', 'PyMongo', 'NoSQL', 'MongoDB', 'Web Scraping', 'BeautifulSoup', 'Splinter'
            ]
    },

    {   projectName: 'Health Risks',
        description: 'Visualization of Health Risks, including D3 Animation',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/HealthRisks/blob/master/README.md' },
            {linkTag: 'Visualization', linkURL: 'https://daddyjab.github.io/HealthRisks/' }
            ],
        technologies: [
            'JavaScript', 'D3'
            ]
    },

    {   projectName: 'Biodiversity',
        description: 'Visualization of Bacterial Biodiversity',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/Biodiversity/blob/master/README.md' },
            {linkTag: 'Visualization', linkURL: 'https://project-biodiversity.herokuapp.com/'}
            ],
        technologies: [
            'Python', 'Jupyter Notebook', 'Flask', 'SQL', 'SQLAlchemy', 'SQLite', 'D3', 'Plotly', 'Heroku'
            ]
    },

    {   projectName: 'Stock Reports',
        description: 'Generation of Stock Performance Reports using MS Excel VBA',
        links: [
            {linkTag: 'GitHub', linkURL: 'https://github.com/daddyjab/StockReports/blob/master/README.md' }
            ],
        technologies: [
            'Excel VBA'
            ]
    },
    
]
