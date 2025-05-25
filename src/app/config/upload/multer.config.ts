import { diskStorage } from 'multer';
import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// Configure multer for disk storage
export const multerConfig = {
  storage: diskStorage({
    // Specify the destination directory for uploads
    destination: './uploads',

    // Generate unique filenames for uploads
    filename: (req, file, callback) => {
      // Create a unique filename with timestamp prefix
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const ext = extname(file.originalname);
      callback(null, `${uniqueSuffix}${ext}`);
    },
  }),

  // Filter allowed file types
  fileFilter: (req, file, callback) => {
    // Define allowed MIME types (you can customize this list)
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      // Reject file if type is not allowed
      callback(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  // File size limits (10MB max)
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
};
