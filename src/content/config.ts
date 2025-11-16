import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			// Transform string to Date object
			pubdate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});
const achievements = defineCollection({
	loader: glob({ base: './src/content/achievements', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			// Transform string to Date object
			pubdate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const announcements = defineCollection({
	loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			// Transform string to Date object
			pubdate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const profile = defineCollection({
	loader: glob({ base: './src/content/profile', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			// Transform string to Date object
			pubdate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { news, achievements, announcements, profile };
