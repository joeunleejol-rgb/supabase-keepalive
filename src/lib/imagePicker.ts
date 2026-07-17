/**
 * Lazy-load expo-image-picker so permission hooks are not evaluated at app startup.
 */
export async function requestCameraPermission() {
  const ImagePicker = await import('expo-image-picker');
  return ImagePicker.requestCameraPermissionsAsync();
}

export async function requestMediaLibraryPermission() {
  const ImagePicker = await import('expo-image-picker');
  return ImagePicker.requestMediaLibraryPermissionsAsync();
}

export async function launchCamera(options?: { quality?: number }) {
  const ImagePicker = await import('expo-image-picker');
  return ImagePicker.launchCameraAsync({
    mediaTypes: ['images'],
    quality: options?.quality ?? 0.8,
  });
}

export async function launchImageLibrary(options?: { quality?: number }) {
  const ImagePicker = await import('expo-image-picker');
  return ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    quality: options?.quality ?? 0.8,
  });
}
