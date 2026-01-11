const SMAKSLY_API = process.env.NEXT_PUBLIC_SMAKSLY_API || 'https://smaksly.com';
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || '695a26baa2542d441b53e457';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body?: string;
  featuredImage: string;
  publishedAt: string;
  authorName: string;
  authorBio?: string;
  authorAvatar?: string;
  readingTime: number;
  tags: string[];
  category?: {
    name: string;
    slug: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

export async function getBlogs(page = 1, limit = 12): Promise<{
  blogs: BlogPost[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}> {
  try {
    const res = await fetch(
      `${SMAKSLY_API}/api/builder/blogs?projectId=${PROJECT_ID}&page=${page}&limit=${limit}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const data = await res.json();
    return {
      blogs: data.data || [],
      pagination: data.pagination || { page, limit, total: 0, totalPages: 0, hasMore: false },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [],
      pagination: { page, limit, total: 0, totalPages: 0, hasMore: false },
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${SMAKSLY_API}/api/builder/blogs?projectId=${PROJECT_ID}&slug=${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}
