export interface User {
    _id: string;
    username: string;
    name: string;
    role: "ADMIN" | "SUPERADMIN";
    created_at: string;
}
