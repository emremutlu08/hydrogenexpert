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
      request_rate_limits: {
        Row: {
          id: string;
          scope: string;
          key_hash: string;
          window_start: string;
          hits: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          scope: string;
          key_hash: string;
          window_start: string;
          hits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          scope?: string;
          key_hash?: string;
          window_start?: string;
          hits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      lead_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          store_url: string | null;
          current_stack: string | null;
          monthly_revenue_band: string | null;
          main_problem: string | null;
          budget_range: string | null;
          timeline: string | null;
          shopify_plus_status: string | null;
          engagement_type: string | null;
          message: string;
          source_path: string;
          source_kind: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          store_url?: string | null;
          current_stack?: string | null;
          monthly_revenue_band?: string | null;
          main_problem?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          shopify_plus_status?: string | null;
          engagement_type?: string | null;
          message: string;
          source_path: string;
          source_kind: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          store_url?: string | null;
          current_stack?: string | null;
          monthly_revenue_band?: string | null;
          main_problem?: string | null;
          budget_range?: string | null;
          timeline?: string | null;
          shopify_plus_status?: string | null;
          engagement_type?: string | null;
          message?: string;
          source_path?: string;
          source_kind?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          meta_description: string;
          tags: string[] | null;
          reading_time: number | null;
          cover_image: string | null;
          published_at: string;
          created_at: string;
          updated_at: string;
          status: "published" | "draft";
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt?: string;
          meta_description: string;
          tags?: string[] | null;
          reading_time?: number | null;
          cover_image?: string | null;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
          status?: "published" | "draft";
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string;
          meta_description?: string;
          tags?: string[] | null;
          reading_time?: number | null;
          cover_image?: string | null;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
          status?: "published" | "draft";
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      bump_rate_limit: {
        Args: {
          p_scope: string;
          p_key_hash: string;
          p_window_start: string;
        };
        Returns: number;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type PostRecord = Database["public"]["Tables"]["posts"]["Row"];
