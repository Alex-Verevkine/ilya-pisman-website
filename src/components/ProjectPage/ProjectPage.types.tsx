import { PropsWithChildren } from "react";
import { ProjectModel } from "../../models";

export type ProjectPageProps = PropsWithChildren<{
  project: ProjectModel;
}>;
