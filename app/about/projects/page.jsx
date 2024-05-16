import { Suspense } from "react"
import ProjectList from "./components/ProjectList"
import ProjectListLoading from "./components/ProjectListLoading"
import { ErrorBoundary } from "react-error-boundary"

export const metadata = {
    title: "Projects",
    description: "This is Projects page",
};

export default async function ProjectsPage() {

    return (
        <div className="">
            <h1 className="mb-8 text-xl">Projects</h1>
            <div className="mb-8">Hello, these are my projects</div>
            <ErrorBoundary fallback={<p>Can not fetch projects</p>}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

