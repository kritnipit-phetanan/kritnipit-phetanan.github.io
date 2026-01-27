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
        },{id: "news-jul-2021-graduated-from-chulalongkorn-university-with-a-b-s-in-environmental-science-2nd-honor",
          title: '🎓 Jul 2021: Graduated from Chulalongkorn University with a B.S. in Environmental Science...',
          description: "",
          section: "News",},{id: "news-️-sep-2022-awarded-the-global-korea-scholarship-gks-by-the-korean-government-for-graduate-studies-at-unist-covering-tuition-and-living-expenses",
          title: '🎖️ Sep 2022: Awarded the Global Korea Scholarship (GKS) by the Korean Government...',
          description: "",
          section: "News",},{id: "news-may-2024-published-paper-on-enhancing-flow-rate-prediction-of-the-chao-phraya-river-basin-using-swat-lstm-model-coupling-in-journal-of-hydrology-regional-studies",
          title: '📄 May 2024: Published paper on Enhancing flow rate prediction of the Chao...',
          description: "",
          section: "News",},{id: "news-aug-2024-completed-m-s-in-environmental-science-amp-amp-engineering-at-unist-with-gpa-3-79-thesis-deep-learning-for-surface-water-modeling-and-monitoring-in-river-basins",
          title: '🎓 Aug 2024: Completed M.S. in Environmental Science &amp;amp;amp; Engineering at UNIST with...',
          description: "",
          section: "News",},{id: "news-aug-2024-received-outstanding-performance-award-from-the-national-institute-for-international-education-niied-for-exceptional-academic-and-research-performance-during-the-gks-program",
          title: '🏆 Aug 2024: Received Outstanding Performance Award from the National Institute for International...',
          description: "",
          section: "News",},{id: "news-sep-2024-joined-data-design-engineering-in-seoul-south-korea-as-an-ai-engineer-working-on-uav-navigation-systems-3d-change-detection-and-computer-vision-solutions",
          title: '🚀 Sep 2024: Joined Data Design Engineering in Seoul, South Korea as an...',
          description: "",
          section: "News",},{id: "news-jul-2025-published-paper-on-sar-remote-sensing-for-monitoring-harmful-algal-blooms-using-deep-learning-models-in-giscience-amp-amp-remote-sensing",
          title: '📄 Jul 2025: Published paper on SAR remote sensing for monitoring harmful algal...',
          description: "",
          section: "News",},{id: "projects-algal-blooms-amp-water-quality-monitoring",
          title: 'Algal Blooms &amp;amp; Water Quality Monitoring',
          description: "Deep learning system for algal blooms detection using SAR remote sensing and computer vision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_algal_blooms/";
            },},{id: "projects-3d-change-detection-amp-damage-assessment",
          title: '3D Change Detection &amp;amp; Damage Assessment',
          description: "Monocular depth estimation pipelines for urban change detection and conflict damage assessment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_damage_assessment/";
            },},{id: "projects-gnss-denied-uav-navigation-system",
          title: 'GNSS-Denied UAV Navigation System',
          description: "VIO &amp; VPS sensor fusion framework with custom EKF for precise UAV localization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_uav_navigation/";
            },},{id: "projects-urban-compliance-monitoring-system",
          title: 'Urban Compliance Monitoring System',
          description: "Geometric change detection for unauthorized structure identification using depth estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_urban_compliance/";
            },},{id: "projects-vision-based-library-inventory-system",
          title: 'Vision-Based Library Inventory System',
          description: "Automated library shelf auditing using YOLO detection and multi-descriptor book identification",
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
