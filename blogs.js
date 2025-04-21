// This will be the blog JavaScript file.
// Anytime you want to post a blog, just copy and paste the following structure and fill out the elements.

const blogs = [
    {
        title: "Designing Communities: The Art of Building Connections", // Title of the blog
        date: "2023-10-10", // Date of the blog post
        paragraphs: [
            "Designing communities is more than just constructing buildings; it's about creating spaces where people can connect and thrive.",
            "From shared spaces to thoughtful urban planning, the design of a community can significantly impact the quality of life for its residents.",
            "In this blog, we will explore the principles of community design, the role of architecture, and how to foster a sense of belonging in modern developments."
        ],
        summary: "Discover the principles of designing communities that foster connection and belonging.", // Short summary of the blog
        imageUrl: "https://example.com/designing-communities.jpg" // Optional image URL for the blog
    },
    {
        title: "The Future of Custom Home Design", // Title of the blog
        date: "2023-10-05", // Date of the blog post
        paragraphs: [
            "Custom homes are becoming increasingly popular as homeowners seek unique spaces tailored to their needs.",
            "From sustainable materials to smart home technology, the future of custom home design is both innovative and exciting.",
            "In this blog, we will discuss the latest trends in custom home design and how to create a home that reflects your personality and lifestyle."
        ],
        summary: "Explore the latest trends and innovations in custom home design.", // Short summary of the blog
        imageUrl: "https://example.com/custom-home-design.jpg" // Optional image URL for the blog
    },
    {
        title: "Building for Renters: Designing Functional and Flexible Spaces", // Title of the blog
        date: "2023-09-25", // Date of the blog post
        paragraphs: [
            "Rental properties require a unique approach to design, focusing on functionality, flexibility, and durability.",
            "Understanding the needs of renters is key to creating spaces that are both practical and appealing.",
            "In this blog, we will explore strategies for designing rental properties that stand out in a competitive market."
        ],
        summary: "Learn how to design rental properties that meet the needs of modern renters.", // Short summary of the blog
        imageUrl: "https://example.com/rental-design.jpg" // Optional image URL for the blog
    }
];


// Function to render blogs to a target container
const renderBlogsToTarget = (blogs, targetSelector) => {
    const container = document.querySelector(targetSelector);
    if (!container) {
        console.error(`Target container "${targetSelector}" not found.`);
        return;
    }

    container.className = 'blogs-container';

    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.className = 'blog';

        blogDiv.innerHTML = `
            <div class="divBlog">
                <h2>${blog.title}</h2>
                <p class="date" ><strong>Upload:</strong> ${blog.date}</p>
                <p class="summary" >${blog.summary}</p>
            </div>
        `;
        container.appendChild(blogDiv);
    });
};

// Automatically render blogs to a specific container in the HTML
document.addEventListener('DOMContentLoaded', () => {
    const latestBlogs = getLatestBlogs(blogs, 3); // Get the latest 3 blogs
    renderBlogsToTarget(latestBlogs, '#blogs-section'); // Ensure the selector matches the ID in your HTML
});
// Ensure the container exists in your HTML
// Add this to your HTML file:
// Ensure the script is properly linked in your HTML file
// Add this to your HTML file within the <body> tag:
// <div id="blogs-section"></div>
// <script src="/c:/Users/Owner/Desktop/Pattrn/blogs.js"></script>

// Ensure the script tag is correctly linked to the file path
document.addEventListener('DOMContentLoaded', () => {
    const latestBlogs = getLatestBlogs(blogs, 3); // Get the latest 3 blogs
    const targetSelector = '#blogs-section';
    const container = document.querySelector(targetSelector);

    if (container) {
        container.innerHTML = ''; // Clear the container to prevent duplicates
        renderBlogsToTarget(latestBlogs, targetSelector); // Render the latest blogs
    } else {
        console.error(`Target container "${targetSelector}" not found.`);
    }
});

// Helper function to get the latest blogs
function getLatestBlogs(blogs, count) {
    return blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
        .slice(0, count); // Get the latest 'count' blogs
}




let lastScrollTop = 0;
const logo = document.getElementById("MainpageLogo");

// Initial styling
logo.style.transition = "transform 0.5s ease, opacity 0.5s";

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down - slide out to the right
    logo.style.transform = "translateX(-60%)";
    logo.style.opacity = "0.6";
  } else {
    // Scrolling up - slide back in
    logo.style.transform = "translateX(0)";
    logo.style.opacity = "1";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);















document.addEventListener("DOMContentLoaded", () => {
    const second = document.getElementById("Second");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            second.classList.add("visible");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    observer.observe(second);
  });




  document.addEventListener("DOMContentLoaded", () => {
    const third = document.getElementById("third");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            third.classList.add("visible");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    observer.observe(third);
  });




  document.addEventListener("DOMContentLoaded", () => {
    const fourth = document.getElementById("fourth");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fourth.classList.add("visible");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    observer.observe(fourth);
  });