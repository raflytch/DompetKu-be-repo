import { memoryStorage } from 'multer';
import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// Configure multer for memory storage (useful for processing before saving)
export const multerMemoryConfig = {
  storage: memoryStorage(),

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
