export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      event_author: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      event_info: {
        Row: {
          category: string
          date: string
          hours: string | null
          id: number
          place: string | null
        }
        Insert: {
          category: string
          date: string
          hours?: string | null
          id?: number
          place?: string | null
        }
        Update: {
          category?: string
          date?: string
          hours?: string | null
          id?: number
          place?: string | null
        }
        Relationships: []
      }
      event_post: {
        Row: {
          content: string | null
          description: string | null
          event_author_id: number | null
          event_info_id: number | null
          id: number
          image: string | null
          published_at: string
          title: string | null
        }
        Insert: {
          content?: string | null
          description?: string | null
          event_author_id?: number | null
          event_info_id?: number | null
          id?: number
          image?: string | null
          published_at?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          description?: string | null
          event_author_id?: number | null
          event_info_id?: number | null
          id?: number
          image?: string | null
          published_at?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_post_event_author_id_fkey"
            columns: ["event_author_id"]
            isOneToOne: false
            referencedRelation: "event_author"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_post_event_info_id_fkey"
            columns: ["event_info_id"]
            isOneToOne: false
            referencedRelation: "event_info"
            referencedColumns: ["id"]
          },
        ]
      }
      gatos: {
        Row: {
          age: string | null
          created_at: string
          gender: string
          id: number
          image_1: string | null
          image_2: string | null
          look: string | null
          name: string
          status: string
          story: string | null
        }
        Insert: {
          age?: string | null
          created_at?: string
          gender: string
          id?: number
          image_1?: string | null
          image_2?: string | null
          look?: string | null
          name: string
          status: string
          story?: string | null
        }
        Update: {
          age?: string | null
          created_at?: string
          gender?: string
          id?: number
          image_1?: string | null
          image_2?: string | null
          look?: string | null
          name?: string
          status?: string
          story?: string | null
        }
        Relationships: []
      }
      kittens: {
        Row: {
          caracteristicas: string | null
          created_at: string
          edad: string
          estado: string
          historia: string | null
          id: number
          imagen: string | null
          nombre: string
          sexo: string
        }
        Insert: {
          caracteristicas?: string | null
          created_at?: string
          edad: string
          estado: string
          historia?: string | null
          id?: number
          imagen?: string | null
          nombre: string
          sexo: string
        }
        Update: {
          caracteristicas?: string | null
          created_at?: string
          edad?: string
          estado?: string
          historia?: string | null
          id?: number
          imagen?: string | null
          nombre?: string
          sexo?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          age: number | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          age?: number | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          age?: number | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: []
      }
      volunteer: {
        Row: {
          availability: string | null
          created_at: string
          edad: number
          email: string
          id: number
          name: string
          reason: string | null
          skills: string | null
        }
        Insert: {
          availability?: string | null
          created_at?: string
          edad: number
          email: string
          id?: number
          name: string
          reason?: string | null
          skills?: string | null
        }
        Update: {
          availability?: string | null
          created_at?: string
          edad?: number
          email?: string
          id?: number
          name?: string
          reason?: string | null
          skills?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
