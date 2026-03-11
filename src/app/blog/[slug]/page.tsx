// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { formatDate } from "@/lib/utils";
import { User } from "lucide-react";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Pitchin Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen">
            {/* Article Header */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-4xl mx-auto px-6 lg:px-8">
                <div className="mb-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: post.category },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span className="text-xs text-zinc-500">{post.readTime}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span className="text-xs text-zinc-500">{formatDate(post.date)}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    {post.title}
                </h1>

                <p className="text-xl text-zinc-400 leading-relaxed mb-10 font-light">
                    {post.excerpt}
                </p>

                <div className="flex items-center gap-4 py-6 border-y border-zinc-800">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                        <User className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div>
                        <div className="text-base font-medium text-white">{post.author}</div>
                        <div className="text-sm text-zinc-500">Founder & CEO, Pitchin</div>
                    </div>
                </div>
            </section>

            {/* Featured Cover Image */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Article Content */}
            <section className="relative pb-32 max-w-3xl mx-auto px-6 lg:px-8">
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Share / Tags footer */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-500 font-medium">Share this article:</span>
                        <button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white hover:border-primary transition-colors">Twitter</button>
                        <button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white hover:border-primary transition-colors">LinkedIn</button>
                    </div>
                </div>
            </section>

            {/* Read More Section */}
            <section className="py-24 bg-zinc-900/30 border-t border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h3 className="text-2xl font-semibold text-white mb-10 text-center">More from Pitchin</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                            <Link
                                key={relatedPost.slug}
                                href={`/blog/${relatedPost.slug}`}
                                className="group flex flex-col h-full bg-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={relatedPost.coverImage}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-medium text-primary mb-2">{relatedPost.category}</div>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors leading-snug">
                                        {relatedPost.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
