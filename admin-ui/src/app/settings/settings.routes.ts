import { Route } from '@angular/router';
import { AdjustmentSource, Administrator, Role } from 'shared/generated-types';

import { createResolveData } from '../common/base-entity-resolver';
import { detailBreadcrumb } from '../common/detail-breadcrumb';
import { _ } from '../core/providers/i18n/mark-for-extraction';

import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';
import { AdministratorListComponent } from './components/administrator-list/administrator-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { RoleDetailComponent } from './components/role-detail/role-detail.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { TaxCategoryDetailComponent } from './components/tax-category-detail/tax-category-detail.component';
import { TaxCategoryListComponent } from './components/tax-category-list/tax-category-list.component';
import { AdministratorResolver } from './providers/routing/administrator-resolver';
import { CountryResolver } from './providers/routing/country-resolver';
import { RoleResolver } from './providers/routing/role-resolver';
import { TaxCategoryResolver } from './providers/routing/tax-category-resolver';

export const settingsRoutes: Route[] = [
    {
        path: 'administrators',
        component: AdministratorListComponent,
        data: {
            breadcrumb: _('breadcrumb.administrators'),
        },
    },
    {
        path: 'administrators/:id',
        component: AdminDetailComponent,
        resolve: createResolveData(AdministratorResolver),
        data: { breadcrumb: administratorBreadcrumb },
    },
    {
        path: 'roles',
        component: RoleListComponent,
        data: {
            breadcrumb: _('breadcrumb.roles'),
        },
    },
    {
        path: 'roles/:id',
        component: RoleDetailComponent,
        resolve: createResolveData(RoleResolver),
        data: { breadcrumb: roleBreadcrumb },
    },
    {
        path: 'tax-categories',
        component: TaxCategoryListComponent,
        data: {
            breadcrumb: _('breadcrumb.tax-categories'),
        },
    },
    {
        path: 'tax-categories/:id',
        component: TaxCategoryDetailComponent,
        resolve: createResolveData(TaxCategoryResolver),
        data: {
            breadcrumb: taxCategoryBreadcrumb,
        },
    },
    {
        path: 'countries',
        component: CountryListComponent,
        data: {
            breadcrumb: _('breadcrumb.countries'),
        },
    },
    {
        path: 'countries/:id',
        component: CountryDetailComponent,
        resolve: createResolveData(CountryResolver),
        data: {
            breadcrumb: countryBreadcrumb,
        },
    },
];

export function administratorBreadcrumb(data: any, params: any) {
    return detailBreadcrumb<Administrator>({
        entity: data.entity,
        id: params.id,
        breadcrumbKey: 'breadcrumb.administrators',
        getName: admin => `${admin.firstName} ${admin.lastName}`,
        route: 'administrators',
    });
}

export function roleBreadcrumb(data: any, params: any) {
    return detailBreadcrumb<Role>({
        entity: data.entity,
        id: params.id,
        breadcrumbKey: 'breadcrumb.roles',
        getName: role => role.description,
        route: 'roles',
    });
}

export function taxCategoryBreadcrumb(data: any, params: any) {
    return detailBreadcrumb<AdjustmentSource.Fragment>({
        entity: data.entity,
        id: params.id,
        breadcrumbKey: 'breadcrumb.tax-categories',
        getName: promotion => promotion.name,
        route: 'tax-categories',
    });
}

export function countryBreadcrumb(data: any, params: any) {
    return detailBreadcrumb<AdjustmentSource.Fragment>({
        entity: data.entity,
        id: params.id,
        breadcrumbKey: 'breadcrumb.countries',
        getName: promotion => promotion.name,
        route: 'countries',
    });
}