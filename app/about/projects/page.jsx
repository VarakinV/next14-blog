import { Suspense } from "react"
import ProjectList from "./components/ProjectList"
import ProjectListLoading from "./components/ProjectListLoading"
import { ErrorBoundary } from "react-error-boundary"
import H1 from "@/components/H1";

export const metadata = {
    title: "Projects",
    description: "This is Projects page",
};

export default async function ProjectsPage() {

    return (
        <div className="">
            <H1>Projects</H1>
            <div className="mb-8">Hello, these are my projects</div>
            <ErrorBoundary fallback={<p>Can not fetch projects</p>}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

