import {FC} from "react";
import {Metadata} from "next";
import {INSTRUMENTS} from "@/constants";

export type PageComponentProps<
  Params extends string = never,
  SearchParams extends string = never
> = {
  params: Record<Params, string>
  searchParams: Partial<Record<SearchParams, string>>
}

export type PageComponent<
  Params extends string = never,
  SearchParams extends string = never
> = FC<PageComponentProps<Params, SearchParams>>

export type GenerateMetadataFunction<
  Params extends string = never,
  SearchParams extends string = never
> = (props: PageComponentProps<Params, SearchParams>) => Metadata | Promise<Metadata>

export type InstrumentName = typeof INSTRUMENTS[number]
