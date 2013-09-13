  AssetSync.configure do |config|
    config.fog_profiver = Figaro.env.FOG_PROVIDER
    config.fog_directory = Figaro.env.FOG_DIRECTORY
    config.aws_access_key_id = Figaro.env.AWS_ACCESS_KEY_ID
    config.aws_secret_access_key = Figaro.env.AWS_SECRET_ACCESS_KEY
    config.gzip_compression = true
  end