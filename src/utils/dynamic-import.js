const importer = (parentDir, file) => {
    return () => import(/* webpackChunkName: "[request]" */ `@/${parentDir}/${file}.vue`);
}

export const loadView = (view) => {
    return importer('views', view);
}

export const loadComponent = (component) => {
    return importer('components', component);
}