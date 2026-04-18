export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          meta_description: string | null;
          published_at: string | null;
          status: "published" | "draft";
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          meta_description?: string | null;
          published_at?: string | null;
          status?: "published" | "draft";
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          meta_description?: string | null;
          published_at?: string | null;
          status?: "published" | "draft";
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type PostRecord = Database["public"]["Tables"]["posts"]["Row"];
