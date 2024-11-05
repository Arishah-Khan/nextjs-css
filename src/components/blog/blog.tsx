import BlogCard from "./blog-card";
import styles from "@/styles/blog/blog.module.css"; // Import your CSS module

const blogDetails = [
    {
        span1: "Consultation",
        span2: "Uncategorized",
        heading: "Maximizing Your Job Search: Insider…",
        image: "/images/case4.png"
    },
    {
        span1: "Education",
        span2: "IT Companies",
        heading: "T5 Common Retirement Fears and How…",
        image: "/images/servicefront5.png"
    },
    {
        span1: "Ecommerce",
        span2: "IT Companies",
        heading: "The Role of Technology in Modern…",
        image: "/images/servicefront2.png"
    },
    {
        span1: "IT Companies",
        span2: "Uncategorized",
        heading: "Navigating a Career Change: What Yo…",
        image: "/images/case3.png"
    },
    {
        span1: "IT Companies",
        span2: "Uncategorized",
        heading: "How to Attract Top Talent to Your…",
        image: "/images/case5.png"  // Fixed here
    },
    {
        span1: "Ecommerce",
        span2: "IT Companies",
        heading: "Emerging Job Market Trends for 2024",
        image: "/images/blog6.png"
    },
    {
        span1: "Ecommerce",
        span2: "Education",
        heading: "The Benefits of Using a Recruitment…",
        image: "/images/service-4-350x220.jpg.png"
    },
    {
        span1: "Ecommerce",
        span2: "News",
        heading: "Lucrative Opportunities: Private Equit…",
        image: "/images/case2.png"
    },
    {
        span1: "Consultation",
        span2: "Ecommerce",
        heading: "Top Tips for Crafting the Perfect…",
        image: "/images/leading2.png"
    },
];

export default function BlogSec() {
    return (
        <main className={styles.main}>
            <div className={styles.blogSec}>
                {blogDetails.map((items, key) => (
                    <BlogCard
                        span1={items.span1}
                        span2={items.span2}
                        heading={items.heading}
                        image={items.image}
                        key={key}
                    />
                ))}
            </div>
        </main>
    );
}
