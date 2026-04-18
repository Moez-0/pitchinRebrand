// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import SectionHeader from "@/components/ui/SectionHeader";
import GridOverlay from "@/components/ui/GridOverlay";
import { formatDate } from "@/lib/utils";
import { User } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";
export const metadata: Metadata = {
    title: "Blog | Pitchin",
    description: "Insights, guides, and opinions on software engineering, product design, and tech agency culture.",
    alternates: {
        canonical: absoluteUrl("/blog"),
    },
};

export default function BlogListingPage() {
    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <GridOverlay opacity={10} />
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our Blog"
                        title="Insights for builders"
                        description="Our latest thoughts on engineering, design, and building successful products."
                    />
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="relative pb-24">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group flex flex-col lg:flex-row bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="relative lg:w-3/5 aspect-[16/9] lg:aspect-auto">
                                <Image
                                    src={featuredPost.coverImage}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent lg:opacity-60"></div>
                            </div>
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{featuredPost.category}</span>
                                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                    <span className="text-xs text-zinc-500">{featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                                        <User className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">{featuredPost.author}</div>
                                        <div className="text-xs text-zinc-500">{formatDate(featuredPost.date)}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Post Grid */}
            <section className="relative pb-32">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col h-full bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-medium text-primary">{post.category}</span>
                                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                        <span className="text-xs text-zinc-500">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3 mt-auto pt-5 border-t border-zinc-800/50">
                                        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                                            <User className="w-4 h-4 text-zinc-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-zinc-300">{post.author}</span>
                                            <span className="text-[10px] text-zinc-500">{formatDate(post.date)}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
