export type Category = "Earthmoving" | "Aerial" | "Agriculture" | "Material Handling" | "Landscaping" | "Power" | "Site Equipment" | "Tools";
export interface OwnerProfile { id: string; name: string; joined: number; rating: number; rentals: number; verified: boolean; responseRate: number; }
export interface Equipment { id: string; slug: string; title: string; brand: string; model: string; year: number; category: Category; type: string; location: string; distance: number; price: number; weeklyPrice: number; rating: number; reviews: number; instantBook: boolean; delivery: boolean; image: string; ownerId: string; hours: number; }
export interface Booking { id: string; equipmentId: string; start: string; end: string; status: "requested" | "confirmed" | "active" | "completed" | "cancelled"; total: number; delivery: boolean; }
export interface Review { id: string; author: string; rating: number; text: string; date: string; }
export interface Message { id: string; sender: "owner" | "renter"; body: string; time: string; }
export interface Conversation { id: string; equipmentId: string; ownerId: string; messages: Message[]; }
