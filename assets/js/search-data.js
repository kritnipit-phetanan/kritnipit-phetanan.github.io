// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-started-undergraduate-studies-at-the-department-of-environmental-science-chulalongkorn-university-in-bangkok-thailand",
          title: 'Started undergraduate studies at the Department of Environmental Science, Chulalongkorn University in Bangkok,...',
          description: "",
          section: "News",},{id: "news-granted-the-global-korea-scholarship-gks-by-the-korean-government-for-graduate-studies-at-unist-covering-tuition-and-living-expenses",
          title: 'Granted the Global Korea Scholarship (GKS) by the Korean Government for graduate studies...',
          description: "",
          section: "News",},{id: "news-awarded-the-outstanding-student-award-by-chulalongkorn-university-for-academic-distinction",
          title: 'Awarded the Outstanding Student Award by Chulalongkorn University for academic distinction.',
          description: "",
          section: "News",},{id: "news-graduated-from-chulalongkorn-university-with-a-b-s-in-environmental-science-2nd-honor",
          title: 'Graduated from Chulalongkorn University with a B.S. in Environmental Science (2nd Honor).',
          description: "",
          section: "News",},{id: "news-attended-jeju-national-university-for-an-intensive-korean-language-study-course-as-a-global-korea-scholarship-gks-scholar",
          title: 'Attended Jeju National University for an intensive Korean language study course as a...',
          description: "",
          section: "News",},{id: "news-joined-the-water-environmental-informatics-laboratory-weil-at-unist-under-the-supervision-of-prof-kyung-hwa-cho",
          title: 'Joined the Water-Environmental Informatics Laboratory (WEIL) at UNIST under the supervision of Prof....',
          description: "",
          section: "News",},{id: "news-presented-research-on-ai-driven-hydrological-modeling-at-the-2023-international-swat-conference-held-at-aarhus-university-denmark-view-presentation",
          title: 'Presented research on AI-driven hydrological modeling at the 2023 International SWAT Conference held...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-environmental-issues-and-innovations-at-the-korea-society-of-environmental-engineers-ksee-conference",
          title: 'Presented a poster on environmental issues and innovations at the Korea Society of...',
          description: "",
          section: "News",},{id: "news-delivered-an-oral-presentation-at-the-korean-society-on-water-environment-kswe-spring-conference-and-honored-with-the-outstanding-presentation-paper-award-view-paper-details",
          title: 'Delivered an oral presentation at the Korean Society on Water Environment (KSWE) Spring...',
          description: "",
          section: "News",},{id: "news-published-paper-on-enhancing-flow-rate-prediction-of-the-chao-phraya-river-basin-using-swat-lstm-model-coupling-in-journal-of-hydrology-regional-studies",
          title: 'Published paper on Enhancing flow rate prediction of the Chao Phraya River Basin...',
          description: "",
          section: "News",},{id: "news-completed-m-s-in-environmental-science-amp-amp-engineering-at-unist-thesis-deep-learning-for-surface-water-modeling-and-monitoring-in-river-basins",
          title: 'Completed M.S. in Environmental Science &amp;amp;amp; Engineering at UNIST. Thesis: “Deep Learning for...',
          description: "",
          section: "News",},{id: "news-received-the-outstanding-performance-award-from-the-national-institute-for-international-education-niied-government-of-the-republic-of-korea-recognizing-academic-excellence-during-the-gks-scholarship-program",
          title: 'Received the Outstanding Performance Award from the National Institute for International Education (NIIED),...',
          description: "",
          section: "News",},{id: "news-joined-data-design-engineering-dde-in-seoul-south-korea-as-an-ai-engineer-as-a-member-of-computer-vision-team",
          title: 'Joined Data Design Engineering (DDE) in Seoul, South Korea as an AI Engineer,...',
          description: "",
          section: "News",},{id: "news-published-paper-on-sar-remote-sensing-for-monitoring-harmful-algal-blooms-using-deep-learning-models-in-giscience-amp-amp-remote-sensing",
          title: 'Published paper on SAR remote sensing for monitoring harmful algal blooms using deep...',
          description: "",
          section: "News",},{id: "projects-algal-blooms-amp-trace-contaminants-monitoring",
          title: 'Algal Blooms &amp;amp; Trace Contaminants Monitoring',
          description: "Deep learning-based algal bloom &amp; trace contaminants detection using SAR imagery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_algal_blooms/";
            },},{id: "projects-automated-3d-conflict-damage-assessment-amp-visualization-system",
          title: 'Automated 3D Conflict Damage Assessment &amp;amp; Visualization System',
          description: "Monocular depth estimation pipelines for urban change detection and conflict damage assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_damage_assessment/";
            },},{id: "projects-uav-state-estimation-in-gnss-denied-environments",
          title: 'UAV State Estimation in GNSS-Denied Environments',
          description: "Sensor fusion pipeline combining Visual-Inertial Odometry (VIO) and Visual Positioning System (VPS) for reliable navigation in GPS-challenged environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_uav_navigation/";
            },},{id: "projects-urban-compliance-monitoring-system",
          title: 'Urban Compliance Monitoring System',
          description: "Height change detection for unauthorized structure identification using depth-based analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_urban_compliance/";
            },},{id: "projects-smart-library-shelf-auditing-system",
          title: 'Smart Library Shelf Auditing System',
          description: "Automated book identification and placement verification using YOLO and multi-feature analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_library_inventory/";
            },},{
        id: 'social-email',
        title: 'Email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%72%69%74.%70%68%65%74%61%6E%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kritnipit-phetanan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kritnipit-phetanan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=omPT4nsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
