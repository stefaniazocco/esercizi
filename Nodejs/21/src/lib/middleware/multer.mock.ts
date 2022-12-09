import multer from "multer";

jest.mock("./multer", () => {               //si fa il mock di multer così non viene creato un nuovo file in upload ogni volta che si fa un test
    const originalModule = jest.requireActual("./multer")

    return{
        __esModule: true,
        ...originalModule,
        initMulterMiddleware: () => {           //si sovrascrive questa funzione così gli si cambia lo storage con quello di default di multer per quando si fanno i test
            return multer({
                storage: multer.memoryStorage(),
                ...originalModule.multerOptions
            })
        }
    }
})
