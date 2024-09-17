"use client";
import CreateBlogEntryBtn from "./CreateBlogEntryBtn";

interface OwnProps {
    refreshBlogEntries: () => Promise<void>;
}

export default function ActionBar({ refreshBlogEntries } : OwnProps) {
    return (
        <div className="flex flex-row-reverse w-full mt-6">
            <CreateBlogEntryBtn refreshBlogEntries={refreshBlogEntries} />
        </div>
    )
}